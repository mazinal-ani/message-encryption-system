import random
import math
from sympy import isprime, mod_inverse
from flask import Flask, request, make_response, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)

CORS(app, support_credentials=True, resources={r'/make_key': {'origins': '*'}}) 

@app.route("/make_key", methods=['GET'])
@cross_origin()
def make_key():
    
    def generate_random_prime(min_value, max_value):
        p = random.randint(min_value, max_value)
        while not isprime(p):
            p += 1
        return p

    p = generate_random_prime(2**500, 2**506 - 1)
    q = generate_random_prime(2**506, 2**512)

    n = p * q

    p1q1 = (p - 1) * (q - 1)

    def generate_coprime(p1q1):
        e = random.randint(2, p1q1)

        if math.gcd(e, p1q1) ==1:
            return e

        return generate_coprime(p1q1)

    e = generate_coprime(p1q1)

    def solve_congruence(e, p1q1):
        
        d = mod_inverse(e, p1q1) * 1 % p1q1

        return d

    d = solve_congruence(e, p1q1)

    publicKey = str(e) + ", " + str(n)
    privateKey = str(d) + ", " + str(n)

    finalmsg = 'Your Public Key is: '+publicKey+'. Your Private Key is: '+privateKey+"."
    finalmsg = jsonify(finalmsg)


    return finalmsg


@app.route("/encrypt", methods=['POST'])
@cross_origin()
def encrypt():
    data = request.get_json()
    pkey = data['values']['publicKey']
    m = data['values']['message']
    temp_pkey = pkey.split()
    e = int(temp_pkey[0])
    n = int(temp_pkey[1])
    print(encrypt_handler(m, e, n))
    return "Hello"

def encrypt_handler(m, e, n):

    temp_arr = m.split()
    arr = [eval(i) for i in temp_arr]
    for  j in range(len(arr)):
        raised = arr[j] ** e
        arr[j] = raised % n
    encrypted = ' '.join(str(k) for k in arr)
    return encrypted


@app.route("/decrypt")
def decrypt(c, d, n):

    temp_arr = c.split()
    arr = [eval(i) for i in temp_arr]
    for  j in range(len(arr)):
        raised = arr[j] ** d
        arr[j] = raised % n
    decrypted = ' '.join(str(k) for k in arr)
    return decrypted


@app.route("/textASCII")
def textASCII(message):
    
    temp_asciichar = [ord(c) for c in message]
    asciichar = ' '.join(str(k) for k in temp_asciichar)
    return asciichar


@app.route("/ASCIItext")
def ASCIItext(message):

    temp_textchar = [chr(c) for c in message]
    textchar = ' '.join(str(k) for k in temp_textchar)
    return textchar


if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)