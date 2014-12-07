import os
from xen import app
from flask import render_template, url_for


@app.context_processor
def inject_variables():
    back_img_path = os.path.join(app.static_folder, 'img', 'back')
    images = os.listdir(back_img_path)
    images = [url_for('static',
                      filename='img/back/{}'.format(i)) for i in images]
    audio_path = os.path.join(app.static_folder, 'audio')
    audio = os.listdir(audio_path)
    audio = [url_for('static',
                      filename='audio/{}'.format(i)) for i in audio]
    return {'images':images, 'audio':audio}

@app.route('/')
def index():
    return render_template('index.html')
