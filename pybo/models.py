from django.db import models

# Create your models here.
class Cost(models.Model):
    from_address_1 = models.CharField(max_length=10)
    from_address_2 = models.CharField(max_length=1000)

    to_address_1 = models.CharField(max_length=10)
    to_address_2 = models.CharField(max_length=1000)

    cost = models.CharField(max_length=200)

    def __str__(self):
        return '{} {} -> {} {} : {}'.format(self.from_address_1, self.from_address_2, self.to_address_1, self.to_address_2, self.cost)

class City_Info(models.Model):
    address_1 = models.CharField(max_length=10)
    address_2 = models.CharField(max_length=10)

    def __str__(self):
        return '{} {}'.format(self.address_1, self.address_2)
