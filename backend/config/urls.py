from django.conf.urls import patterns, include, url

import people.views

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'backend.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', people.views.get_all_people, name='people'),
    url(r'^admin/', include(admin.site.urls)),
)
