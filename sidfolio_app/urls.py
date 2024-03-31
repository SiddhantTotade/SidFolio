from django.urls import path
from .views import ProjectView, AboutView

urlpatterns = [
    path("projects/", ProjectView.as_view(), name="projects"),
    path("about/", AboutView.as_view(), name="About"),
]
