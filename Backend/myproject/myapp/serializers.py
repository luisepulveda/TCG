from rest_framework import serializers
from .models import usuario,libro,boleta,detalle_boleta
from django.contrib.auth.models import User


class usuarioSerializer(serializers.ModelSerializer):
    class  Meta:
        model = usuario
        fields = '__all__'

class libroSerializer(serializers.ModelSerializer):
    class  Meta:
        model = libro
        fields = '__all__'

class boletaSerializer(serializers.ModelSerializer):
    class  Meta:
        model = boleta
        fields = '__all__'

class detalle_boletaSerializer(serializers.ModelSerializer):
    class  Meta:
        model = detalle_boleta
        fields = '__all__'

#
class Userserializer(serializers.ModelSerializer):
    class  Meta:
        model = User
        fields = '__all__'
        