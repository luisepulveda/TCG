from typing import Any
from django.db import models

# Create your models here.
class usuario(models.Model):
    id_usuario = models.CharField (max_length=50, primary_key=True, null=False)
    tipo_usuario = models.CharField(max_length=50)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    correo = models.CharField(max_length=50)
    contrasena = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.id_usuario} {self.tipo_usuario} {self.nombre} {self.apellido}"
    
class libro(models.Model):
    isbn = models.CharField(max_length=13, primary_key=True,null=False)
    titulo = models.CharField(max_length=50)
    autor = models.CharField(max_length=50)
    editorial = models.CharField(max_length=50)
    anio = models.IntegerField()
    genero = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.isbn} {self.titulo} {self.autor} {self.editorial} {self.anio} {self.genero}"
    
class boleta(models.Model):
    id_boleta = models.CharField(max_length=50, primary_key=True, null=False)
    id_usuario = models.ForeignKey(usuario, on_delete=models.CASCADE)
    fecha = models.DateField()
    detallle = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.id_boleta}"
    
class detalle_boleta(models.Model):
    id_detalle_boleta = models.CharField(max_length=50, primary_key=True)
    id_boleta = models.ForeignKey(boleta, on_delete=models.CASCADE)
    id_libro = models.ForeignKey(libro, on_delete=models.CASCADE)
    cantidad = models.IntegerField()

    def __call__(self):
        return 
    
