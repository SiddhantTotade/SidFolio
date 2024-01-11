from django.urls import path
from .views import ProjectView, SkillsView, AboutView

urlpatterns = [
    path("projects/", ProjectView.as_view(), name="projects"),
    path("about/", AboutView.as_view(), name="About"),
    path("skills/", SkillsView.as_view(), name="Skills")
]
