# datenbestand
Bewertung von Datenbeständen

Projektarbeit am ISS Lehrstuhl SS 20 Thema 2 (Bewertung von Datenbankbestände)

Nr1 : Datenbank Qualität nach vorgegebenen Merkmalen bestimmen .
	Beispiel von Kriterien (Geographie , Zeit , Alter , einkommen…)
Nr 2 : Beste Datenbank nach Ausgewählte Kriterien Ordnen
	Dafür müssen wir mehrere Datenbank haben und dann nach Kriterien die verschiedene Datenbank Vergleiche (Aggregation über mehrere Datenbank ).
	
Beispiel: Der Wert der CRM-Datenbank A soll bestimmt werden. Dem Nutzer ist dabei die Qualität der 
geographischen Verteilung der Kunden und die zeitliche Dichte insgesamt und im vergangenen Jahr 
besonders wichtig. Dh. Wenn Kunden nur aus einer Stadt kommen, ist dies weniger wertvoll, als 
wenn sie auch ganz Europa gleichmäßig verteilt kommen. Gleiches gilt für die anderen Merkmale 
zeitliche Verteilung, Umsatz pro Kunde etc. 

1. Install Python and Django
https://docs.djangoproject.com/en/3.1/intro/install/

2. Navigate in your shell to the project directory "datenbestand"

3. Run the Django Server
python3 manage.py runserver
or
python manage.py runserver

Something like this should appeare in the console:
...
Django version 2.2.7, using settings 'datenbestand.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.

4. Get to the service
Start your browser.

For the backend enter the url: http://127.0.0.1:8000/admin/ (depends on localhost)

Logindata:
Username: admin
Password: databank

Click on "Datasets" in the "DATEIN" section
Here you can see some example Datasets.
You can add your own data via the Button "ADD DATASET +" in the upper right corner

For the frontend enter the url: http://127.0.0.1:8000/datein/ (depends on localhost)

Click on "TELL ME MORE" to get to the Data
Here you have an overview of the data and also the possibility to determine the aggregated total quality
Every dataname is also a link to a seperate page with more details
If you click it, you get statistics and visualization of the data
Most importantly you can then calculate the quality of this unique dataset via the button "RESULT"


If there are any package problems, open the project in a integrated development environment
(e.g. PyCharm) and it should automatically detect the required packages
