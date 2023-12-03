from django.http import HttpResponse
from django.template import loader
from django.views.generic import TemplateView
from main.models import Hospital


class HospitalsView(TemplateView):
    template_name = 'main/index.html'

    def get_context_data(self, **kwargs):
        # Hospital.objects.distinct("states") does not work while using sqlite
        states = set(Hospital.objects.values_list("state", flat=True))
        
        return {
            'state_choices': list(states),
        }