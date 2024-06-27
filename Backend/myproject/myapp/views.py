from rest_framework import viewsets
from.models import usuario,libro,boleta,detalle_boleta
from .serializers import usuarioSerializer,libroSerializer,boletaSerializer,detalle_boletaSerializer,Userserializer
from django.contrib.auth.models import User
from rest_framework import permissions
# Create your views here.

class usuarioViewSet(viewsets.ModelViewSet):
    queryset = usuario.objects.all()
    serializer_class=usuarioSerializer
    permission_classes = [permissions.AllowAny]

class libroViewSet(viewsets.ModelViewSet):
    queryset = libro.objects.all()
    serializer_class=libroSerializer

class boletaViewSet(viewsets.ModelViewSet):
    queryset = boleta.objects.all()
    serializer_class=boletaSerializer

class detalle_boletaViewSet(viewsets.ModelViewSet):
    queryset = detalle_boleta.objects.all()
    serializer_class=detalle_boletaSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = Userserializer