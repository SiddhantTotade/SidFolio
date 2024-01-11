from .models import Projects, Skills, About
from rest_framework.serializers import ModelSerializer, FileField


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Projects
        fields = "__all__"


class SkillsSerializer(ModelSerializer):
    skill_logo = FileField(required=False)

    class Meta:
        model = Skills
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['skill_logo'] = instance.skill_logo.url if instance.skill_logo else None
        return representation


class AboutSerializer(ModelSerializer):
    class Meta:
        model = About
        fields = "__all__"
