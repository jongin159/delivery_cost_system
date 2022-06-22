# Generated by Django 3.2.5 on 2022-06-21 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pybo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='City_Info',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address_1', models.CharField(max_length=10)),
                ('address_2', models.CharField(max_length=10)),
            ],
        ),
        migrations.RemoveField(
            model_name='cost',
            name='from_address_3',
        ),
        migrations.RemoveField(
            model_name='cost',
            name='to_address_3',
        ),
    ]