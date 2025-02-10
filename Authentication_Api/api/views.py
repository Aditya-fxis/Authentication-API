from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from api.serializers import UserRegistrationSerializer
# Create your views here.
class UserRegistrationView(APIView):
    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        return Response({'msg':'Registration Success'})