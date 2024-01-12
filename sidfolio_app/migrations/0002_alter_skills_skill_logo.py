# Generated by Django 5.0.1 on 2024-01-09 13:18

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("sidfolio_app", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="skills",
            name="skill_logo",
            field=models.FileField(
                blank=True,
                null=True,
                upload_to="media",
                validators=[
                    django.core.validators.FileExtensionValidator(["pdf", "doc", "svg"])
                ],
            ),
        ),
    ]