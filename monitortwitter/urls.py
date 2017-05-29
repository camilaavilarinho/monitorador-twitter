from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView
from django.contrib.auth import views as auth_views

from monitorapp import views as core_views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^djangojs/', include('djangojs.urls')),

    url(r'^$', core_views.home, name='home'),
    url(r'^login/$', auth_views.login, name='login'),
    url(r'^logout/$', auth_views.logout, name='logout'),
    url(r'^oauth/', include('social_django.urls', namespace='social')),
    #url(r'^$', TemplateView.as_view(template_name='exampleapp/itworks.html'), name='home'),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
