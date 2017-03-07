# Creating proxies for non standard APIs <!-- .element style="font-size:2em"-->

## With Python and AWS services

Jorge Sanz · jorge@carto.com

2017-03-07

<img class="noborder" src="../resources/carto/logo_CARTO_negative_180.png" style="width:25%;">

---

# Problem definition

> I want to map data from this API *X* but it generates a random JSON output

---

# Solution

> Create a proxy that converts this API output into a GeoJSON or any other CARTO supported format

> Extra points if I don't have to set up a server for this <!-- .element class="fragment"-->

---

# Meet zappa

* [Zappa](https://github.com/Miserlou/Zappa): Serverless Python Webservices
* Deploy Python WSGI applications as AWS Lambda and API Gateway services
* Don't care about AWS configuration
* Focus on development of a Flask app

---

# Meet zappa

```bash
$ pip install zappa
$ zappa init
$ zappa deploy
```

![](https://camo.githubusercontent.com/be05103c626a5afe18dc4b1208a4b465dbd9e731/687474703a2f2f692e696d6775722e636f6d2f6631504a7843512e676966)

---

# Use case: Flickr API proxy

* [Blogpost](https://geomaticblog.net/2016/12/26/creating-a-collaborative-photo-map-from-flickr-to-carto-with-amazon-lambda/) with some context
* Flickr provides a rich API
* No GeoJSON

---

# Sample code

https://github.com/jsanz/carto-lambda-examples/tree/master/flickr_to_json

* Minimal [flask](http://flask.pocoo.org/) application with a single entry point (`/`)
* It takes some defaults and any parameters passed and generates a valid Flickr API call
* It parses the result to generate a valid GeoJSON
* Less than 150 LOC + two files:
  * `requirements.txt`: python dependencies
  * `zappa_settings.json`: zappa configuration

---

# Source review and Demo

---

# Other resources

* [CARTO Team map](https://solutions.carto.com/builder/6b8d6968-cc26-11e6-b997-0ee66e2c9693/embed) is created from [another proxy](https://github.com/jsanz/carto-lambda-examples/blob/master/bamboo/bamboo.py) set to [Bamboo](https://www.bamboohr.com/)
* Some Flickr maps:
  * [Last 24 hours most interesting pictures](https://jsanz.carto.com/builder/2df0ff3a-cacc-11e6-9fb5-0e3ff518bd15/embed)
  * [Paella map](https://jsanz.carto.com/builder/12106adc-5064-4439-9ff1-113e072378f9/embed)
  * [Kittens map](https://jsanz.carto.com/builder/fb45c5b2-e88e-11e6-ad99-0e3ff518bd15/embed)

---

Thanks!!
===================================

## Creating proxies for non standard APIs with AWS Lambda

Jorge Sanz · jorge@carto.com

2017-03-07

<img class="noborder" src="../resources/carto/logo_CARTO_negative_180.png" style="width:25%;">

<!--
RESOURCES

COLORS:

Location Red
#F24440
#FF918F

Navy Blue
#162945

Purple
#C6ACFC
#C6ACFC

Prediction Blue
#1785FB

Green
#73C86B
-->
