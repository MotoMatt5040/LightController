

'''
UI -> JSON to backend -> Backend -> JSON to Device
Device Updates anytime these change Red Value, Green Value, Blue Value Number anytime these update (POST Request after every udpate)

In Backend Connect to device (POST) Values again to Device
If successful return 200 to front end 


Find Package connect to bluetooth objects to send Data.




'''

# import json

# app = Flask(__name__)
# CORS(app)


# @app.route('/api/register', methods=['POST'])
# def register_endpoint():
#   if request.method == 'POST':
#     username = request.form['username']
#     password = request.form['password']

#     hashed_password = generate_password_hash(password, method='sha256')

#     user = Usercredentials.query.filter_by(username=username).first()

#     if user:
#        return make_response('Username taken!', 403)

#     newUser = Usercredentials(username = username, password = hashed_password)

#     db.session.merge(newUser)
#     db.session.commit()
    
#     token = jwt.encode({
#       'username': request.form['username'],
#       'expiration': str(datetime.utcnow() + timedelta(minutes=30)),
#     }, app.config['SECRET_KEY'])

#     return {'token': token}


# @app.route('/api/change', methods=['POST'])
# def change_color(color: str) -> str:
#     if color == 'white':
#         color = 'Color changed to white'
#     elif color == 'red':
#         color = 'Color changed to red'

#     dataToReturn = {
#         "color" : color
#     }

#     return json.dumps(dataToReturn)

    # /api/change 
    # dataToReturn :  {
    #     "info" : "info",
    #     "info2" : "info2"
    # }

    # dataToReturn["info"] == "info"
