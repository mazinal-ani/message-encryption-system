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
    final = encrypt_handler(m, e, n)
    print(final)
    return final

def encrypt_handler(m, e, n):

    temp_arr = m.split()
    arr = [eval(i) for i in temp_arr]
    for  j in range(len(arr)):
        raised = arr[j] ** e
        arr[j] = raised % n
    encrypted = ' '.join(str(k) for k in arr)
    return encrypted


@app.route("/decrypt", methods=['POST'])
@cross_origin()
def decrypt():

    data = request.get_json()
    pkey = data['values']['privateKey']
    c = data['values']['message']
    temp_pkey = pkey.split()
    d = int(temp_pkey[0])
    n = int(temp_pkey[1])
    final = decrypt_handler(c, d, n)
    print(final)
    return final


def decrypt_handler(c, d, n):

    temp_arr = c.split()
    arr = [eval(i) for i in temp_arr]
    for  j in range(len(arr)):
        raised = arr[j] ** d
        arr[j] = raised % n
    decrypted = ' '.join(str(k) for k in arr)
    return decrypted





@app.route("/textASCII", methods=['POST'])
@cross_origin()
def textASCII():

    data = request.get_json()
    temp_msg = data['values']
    msg = temp_msg.get('message')
    print(msg)
    temp_asciichar = []
    for c in msg:
        try:
            temp_asciichar.append(int(c))
        except ValueError:
            pass
    print(temp_asciichar)
    first_temp_asciichar = [str(m) for m in temp_asciichar]
    second_temp_asciichar = [ord(h) for h in first_temp_asciichar]
    asciichar = ' '.join(str(k) for k in second_temp_asciichar)
    print(asciichar)
    return asciichar


@app.route("/ASCIItext", methods=['POST'])
@cross_origin()
def ASCIItext():

    data = request.get_json()
    temp_msg = data['values']
    msg = temp_msg.get('message')
    msg = msg.split()
    print(msg)
    temp_textchar = []
    for c in msg:
        try:
            temp_textchar.append(int(c))
        except ValueError:
            pass
    print(temp_textchar)
    first_temp_textchar = [chr(h) for h in temp_textchar]
    textchar = ' '.join(first_temp_textchar)
    print(textchar)
    return textchar


if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)