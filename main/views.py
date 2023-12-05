from django.views.generic import TemplateView
from main.models import Hospital
from rest_framework import viewsets
from main.serializers import HospitalSerializer


class HospitalsView(TemplateView):
    template_name = 'main/index.html'

    def get_context_data(self, **kwargs):
        # Hospital.objects.distinct("states") does not work while using sqlite
        states = set(Hospital.objects.values_list("state", flat=True))
        
        return {
            'state_choices': sorted(list(states)),
        }


class HospitalViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for listing hospitals.
    """
    serializer_class = HospitalSerializer

    def get_queryset(self):
        state = self.kwargs.get('state')
        if state:
            return Hospital.objects.filter(state=state)
        return Hospital.objects.all()