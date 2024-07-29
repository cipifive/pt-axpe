# __Ejercicio 1__
## _Solución propuesta para el ejercicio 1_

-  __1. Que problemas detectas en la operación y razona la respuesta__

    Detecto dos problemas principales dentro del pseudocódigo propuesto para la función getTotal():

En el planteamiento inicial, no existe polimorfismo. En el código planteado, se detallan una serie de verificaciones para calcular el total, lo cual no es idóneo desde el paradigma del diseño orientado a objetos. Sería mas conveniente implementar métodos específicos de cada tipo de servicio, que permita hacer este cálculo de manera independiente. Así, se podrían añadir nuevos tipos de servicio en el futuro, sin tener que modificar el código de RegisteredUser.

Por otra parte, no se respeta el Principio de Responsabilidad Única, que es el primer principio SOLID para desarrollar código flexible y robusto. Este principio, bajo un marco teórico, enuncia que una clase debe tener una única razón para cambiar, lo que significa que debe tener solo una responsabilidad o propósito. Aplicando este caso al ejemplo planteado, las clases StreamingService y DownloadService deberían tener su propio método para calcular el precio.


- __Propón una solución alternativa (también en pseudocódigo del mismo estilo) que corrija los problemas de la operación getTotal de RegisteredUser que has detectado en la pregunta anterior. Realiza todos los cambios que consideres necesarios en cualquiera de las clases del modelo del enunciado.__

La solución propuesta se encuentra en los archivos RegisteredUser.js y Service.js. Se ha eliminado el cálculo del coste total en la clase RegisteredUser, y se ha implementado tanto en StreamingService como en DownloadService. De esta forma, tal y como comentábamos en el primer punto, si se añadiesen nuevos tipos de servicios o cálculos en el futuro, no habría que modificar la clase RegisteredUser. Además, así se respeta el Principio de Responsabilidad Única, otorgando escalabilidad al diseño.