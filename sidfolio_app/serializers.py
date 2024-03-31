from .models import Projects, About
from rest_framework.serializers import ModelSerializer


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Projects
        fields = "__all__"


class AboutSerializer(ModelSerializer):
    class Meta:
        model = About
        fields = "__all__"
