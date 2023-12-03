import csv
from main.models import Hospital
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = 'import hospitals from csv'

    def add_arguments(self, parser):
        parser.add_argument('--path', type=str)

    def handle(self, *args, **kwargs):
        path = kwargs['path']
        str_to_float = lambda a : float(a) if a else None
        with open(path, 'rt') as f:
            reader = csv.DictReader(f)
            for row in reader:
                Hospital.objects.create(
                    name=row['Hospital Name'],
                    state=row['State'],
                    rating=str_to_float(row['Hospital overall rating'])
                )
    
