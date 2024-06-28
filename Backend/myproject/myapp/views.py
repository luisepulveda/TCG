from rest_framework import viewsets
from.models import usuario,libro,boleta,detalle_boleta
from .serializers import usuarioSerializer,libroSerializer,boletaSerializer,detalle_boletaSerializer,Userserializer
from django.contrib.auth.models import User
#from rest_framework_simplejwt.tokens import RefreshToken
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
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return libro.objects.filter(usuario=self.request.usuario)

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.usuario)

class detalle_boletaViewSet(viewsets.ModelViewSet):
    queryset = detalle_boleta.objects.all()
    serializer_class=detalle_boletaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return detalle_boleta.objects.filter(id_boleta=self.kwargs['id_boleta'])
        

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = Userserializer