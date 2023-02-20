from django.urls import path, include, re_path
from django.views.generic import TemplateView

from django.contrib import admin
from .views import UserProfile

urlpatterns = [
    path('users/me', UserProfile.as_view()),
]
