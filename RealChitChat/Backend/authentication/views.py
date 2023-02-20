from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from .serializers import UserSerializer

class UserProfile(APIView):
	permission_classes = (permissions.AllowAny, )

	def get(self, request, format=None):
		user = User.objects.all()
		user = UserSerializer(user)
		return Response({'success': 'User created successfully', "user": user.data})
