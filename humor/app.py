from flask import Flask, render_template #importando Flask e render template para retornar a página

app = Flask(__name__)#instanciar 

@app.route("/")#rota/caminho
def home():#def home() é boa prática definir a função def 'home'()   

    return render_template('index.html')#vinculando o index ao app.py

if (__name__ == "__main__"):
    app.run(debug=True)#debug ativo 