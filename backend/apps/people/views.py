from django.shortcuts import HttpResponse
from django.conf import settings

from people.models import Person

from json import dumps

# @require_http_method('GET')
def get_all_people(request):
	people = Person.objects.all()
	params = []
	for person in people:
		params.append({
			'id' : person.id,
			'name' : person.name,
			'car_make' : person.car_make
		})
	return HttpResponse(dumps(params), status=200, content_type='application/json')

