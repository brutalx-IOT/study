import requests, time


# for i in range(200):
# 	post = requests.post("http://192.168.1.79/setLed", data={"value": "led1"})
# 	print(post)
# 	post = requests.post("http://192.168.1.79/setLed", data={"value": "led2"})
# 	print(post)
# 	post = requests.post("http://192.168.1.79/setLed", data={"value": "ledRepeat"})
# 	print(post)
# 	post = requests.post("http://192.168.1.79/setRelay", data={"value": "relay1"})
# 	print(post)
# 	post = requests.post("http://192.168.1.79/setRelay", data={"value": "relay2"})
# 	print(post)


post = requests.post("http://192.168.1.79/setStatus", json={"value": "led1"})
print(post)