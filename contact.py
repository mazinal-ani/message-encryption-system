from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pymongo
import ssl
import certifi

app = Flask(__name__)

CORS(app, support_credentials=True, resources={r'/make_key': {'origins': '*'}}) 

client = pymongo.MongoClient("mongodb+srv://mazin:trial-password@encryption-contact-form.yqomrwn.mongodb.net/?retryWrites=true&w=majority", tlsCAFile=certifi.where())

db = client["Contact-Requests"]
msg_collection = db["Inquiries"]


    

@app.route("/submit", methods=['POST'])
@cross_origin()
def submit():
    data = request.get_json()
    inserted_data = {'Name': data['values']['name'], 'Email': data['values']['email'], 'Message': data['values']['message'],}
    print("Helo!")
    try:
        msg_collection.insert_one(inserted_data)
        print("Success!")
        return jsonify("Submitted!")
    except Exception as e:
        print("Error:", e)
        return jsonify("An error occurred while submitting the data.")


if __name__ == '__main__':
    app.run(host='localhost', port=5001, debug=True)