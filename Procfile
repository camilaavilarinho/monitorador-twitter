web: gunicorn monitortwitter.wsgi --limit-request-line 8188 --log-file -
worker: celery worker --app=monitortwitter --loglevel=info
