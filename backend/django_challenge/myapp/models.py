from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField()

    def __str__(self):
        return self.user.username


class Painting(models.Model):
    title = models.CharField(max_length=100)
    artist = models.CharField(max_length=50)
    description = models.TextField()
    image_filename = models.CharField(
        max_length=100, default="/static/media/gallery/1.jpg"
    )
    is_public = models.BooleanField(default=True)

    def __str__(self):
        return self.title
