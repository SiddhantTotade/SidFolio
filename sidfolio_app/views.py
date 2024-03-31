from .models import Projects, About
from .serializers import ProjectSerializer, AboutSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class ProjectView(APIView):
    def get(self, request):
        try:
            projects = Projects.objects.all()
            serialized_data = ProjectSerializer(projects, many=True)

            return Response(serialized_data.data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)


class AboutView(APIView):
    def get(self, request):
        try:
            about = About.objects.all()
            serialized_data = AboutSerializer(about, many=True)

            return Response(serialized_data.data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
