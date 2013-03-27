import tangelo
import urllib

variables = {
    "population" : "P0010001"
    # TODO(choudhury): fill in the rest.
}

states = {
    "AL": "01"
    # TODO(choudhury): fill in the rest.
}

def run(*dataspec, **query):
    f = urllib.urlopen("http://api.census.gov/data/" + "/".join(dataspec) + "?" + urllib.urlencode(query))

    response = tangelo.empty_response()
    response['result'] = f.read()

    return response
