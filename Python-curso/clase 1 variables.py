"""
# variables en una sola línea 
name, surname,alias,age="LUIS","APAZA","PROFE",32
print( "Me llamo:",name, surname,". Mi edad es : ",age,".Mi apodo es",alias)


primer_nombre=input('cual es tu nombre')
anio=input('cuantos años tienes')
print (primer_nombre)
print(anio)
###  SE CAMBIA EL TIPO DE DATO
#FORZAMOS EL TIPO
address:str="MI DIRECCION"
address=32
print(type(address))
"""
## OPERADORES##
"""""
print (3+1)
print(35 % 100)
print(10// 3)# aproxima a un numero entero- FLOR DIVISION
print(10/ 3)
print(2** 3)# ELEVAMOS 2    A 3
print("HOLA "+"MUNDO")
print("HOLA "+str(5))# SE CONVIERTE EN TEXTO CON STR-LENGUAJE DEBIL SI CONCATENA 
print("HOLA "*5)# EL TEXTO SE MULTIPLICA 
print("HOLA "*2)
my_float=2.5*2
print("hola" * int(my_float))
"""

###OPERADORES COMPARATIVOS############
"""""
print(3>2)
print(3>5)
print(3==3)
print(3!=3)
print("mundo">"mund")
print(len("mundo")>len("mund"))

"""
#OPERADORES LOGICOS#
#print(not(3>4))
### STRING 
texto="este es un texto\n salto de linea"
texto2="\teste es un texto\n salto de linea"
print(texto)
print(texto2)
name, apellido, anio="LUIS","APAZA",32
print(f"Mi nombre es {name} {apellido} y edad es {anio}")

