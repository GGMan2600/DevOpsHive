from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/login')
def index():
    return render_template("index.html")

@app.route('/main', methods=["GET", "POST"])
def main():
    return render_template("main.html")

@app.route('/devops', methods=["GET", "POST"])
def DevOps():
    return render_template("DevOps.html")

@app.route('/Cloud',methods=["GET", "POST"])
def Cloud():
    return render_template("Cloud.html")

@app.route('/Site', methods=["GET", "POST"])
def Site():
    return render_template("Site.html")
    
@app.route('/account', methods=["GET", "POST"])
def account():  
    return render_template("account.html")  

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')