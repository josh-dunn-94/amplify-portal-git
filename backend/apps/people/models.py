from django.db import models


class Person(models.Model):
    name = models.CharField(max_length=200, blank=True)
    car_make = models.CharField(max_length=200, blank=True)
