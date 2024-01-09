from django.db import models

# Create your models here.


class Projects(models.Model):
    title = models.CharField(max_length=50, null=True, blank=True)
    description = models.TextField()
    github = models.URLField(null=True, blank=True)
    live = models.URLField(null=True, blank=True)
    is_live = models.BooleanField(default=False, null=True, blank=True)

    def __str__(self) -> str:
        return self.title


class About(models.Model):
    description = models.TextField()
    github = models.URLField(null=True, blank=True)
    linkedin = models.URLField(null=True, blank=True)
    resume = models.FileField(upload_to="media", null=True, blank=True)


class Skills(models.Model):
    skill_name = models.CharField(max_length=20, null=True, blank=True)
    skill_logo = models.ImageField(upload_to="media", null=True, blank=True)

    def __str__(self) -> str:
        return self.skill_name
