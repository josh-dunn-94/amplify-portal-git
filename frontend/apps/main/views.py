from django.http import HttpResponse
from django.shortcuts import render_to_response
	
import json
import urllib2

def show_homepage(request):

	people = json.loads(urllib2.urlopen('http://localhost:8500/').read())
	data = json.dumps(people, indent=2)
	context = dict()
	context['cars'] = []
	
	car_makes = set()

	counts = []
	for person in people:
		car_makes.add( person['car_make'] )

	for	make in car_makes:
		count = 0
   		for person in people:
			if person['car_make'] == make:
				count += 1
		counts.append(count)
	
	context['cars'] = zip(car_makes,counts)

	return render_to_response('main/index.html', context)
