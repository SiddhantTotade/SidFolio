from .serializers import ProjectSerializer, AboutSerializer, SkillsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class ProjectView(APIView):
    def get(self, request):
        serialized_data = ProjectSerializer(data=request.data, many=True)
        print(serialized_data.data)

        if serialized_data.is_valid():
            return Response({"projects": serialized_data.data}, status=status.HTTP_200_OK)
        return Response({"projects": serialized_data.data}, status=status.HTTP_404_NOT_FOUND)
