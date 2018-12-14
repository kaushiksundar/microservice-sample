FROM python:3.6-jessie

LABEL maintainer="kaushik11091@gmail.com"

COPY . /usr/src/app
WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN pip install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["python"]

CMD [ "app.py"]
