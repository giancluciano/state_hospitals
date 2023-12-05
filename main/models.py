from django.db import models

class Hospital(models.Model):
    name = models.CharField(max_length=40)  # 'Hospital Name'
    state = models.CharField(max_length=40)  # 'State'
    rating = models.FloatField(null=True)  # 'Hospital overall rating'
