from django.urls import path
from .views import ProjectView, SkillsView, AboutView

urlpatterns = [
    path("project/", ProjectView.as_view(), name="project"),
    path("about/", AboutView.as_view(), name="about"),
    path("skill/", SkillsView.as_view(), name="skill")
]
