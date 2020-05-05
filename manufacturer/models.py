from django.db import models

class Manufacturer(models.Model):
    name = models.CharField(max_length=255)
    logo = models.CharField(max_length=999)
    description = models.CharField(max_length=999, blank=True)