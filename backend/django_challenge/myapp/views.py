from django.contrib.auth import login, authenticate
from django.http import JsonResponse
from django.db import connection
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
@api_view(["POST"])
def user_login(request):
    """
    User login view.
    """
    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        return JsonResponse({"message": "Login successful"})
    else:
        return JsonResponse({"error": "Invalid username or password"}, status=400)


@api_view(["POST"])
def user_register(request):
    """
    User registration view.
    """
    response_data = {"message": "User registered successfully."}
    return JsonResponse(response_data)


@api_view(["GET"])
def get_painting(request):
    """
    Get painting by artist view (with SQL injection vulnerability).
    """
    user_input = request.GET.get("input")

    sql_query = f"SELECT * FROM myapp_painting WHERE (artist LIKE '%{user_input}%') AND is_public = 1"

    with connection.cursor() as cursor:
        cursor.execute(sql_query)
        results = cursor.fetchall()

    response_data = {
        "results": [
            {
                "id": row[0],
                "title": row[1],
                "artist": row[2],
                "description": row[3],
                "is_public": row[4],
                "image_filename": row[5],
            }
            for row in results
        ]
    }

    return JsonResponse(response_data)
