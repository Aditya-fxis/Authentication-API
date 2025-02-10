from rest_framework import serializers
from api.models import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'tc', 'password', 'password2']
        extra_kwargs={
            'password':{'write_only':True}
        }