---
date: 2021-11-02
title: 'Deploy sample application di Kubernetes'
template: post
thumbnail: '../thumbnails/Kubernetes-Logo.wine.png'
slug: Deploy-sample-application-di-Kubernetes
categories:
  - kubernetes
tags:
  - kubernetes
---

Di artikel sebelumnya kita sudah berhasil bagaimana cara menginstall kubernetes, sekarang kita akan coba deploy sample application di kubernetes.
1. Buat file untuk menyimpan konfigurasi aplikasi
```sh
sudo touch sample-application.yaml
```

2. Lalu copy dan paste script dibawah ke file yang sudah dibuat tadi
```sh
apiVersion: v1
kind: Service
metadata:
  name: juiceshop
  namespace: security
  labels:
    app.kubernetes.io/name: security
spec:
  type: NodePort
  selector:
    app: juiceshop
  ports:
    - name: juiceshop-port
      protocol: TCP
      port: 8080
      targetPort: 3000
---
apiVersion: apps/v1
kind: Deployment
metadata:
    name: juiceshop
    namespace: security
    labels:
      app: juiceshop
spec:
    replicas: 1
    selector:
      matchLabels:
        app: juiceshop
    template:
      metadata:
        labels:
          app: juiceshop
      spec:
        containers:
        - name: juiceshop
          image: docker.io/bkimminich/juice-shop
          ports:
          - containerPort: 3000
```
Save dan keluar dari nano

3. Buat namespaces
```sh
kubectl create ns security
```
<span style="display:block;text-align:center">![image](https://user-images.githubusercontent.com/61746302/140010990-8d09a4db-208e-4cba-aaaf-33c3a830f7ff.png)</span>

4. Deploy Aplikasi
```sh
kubectl apply -f sample-application.yaml
```
<span style="display:block;text-align:center">![image](https://user-images.githubusercontent.com/61746302/140011014-ed78cab3-bbf4-47fc-ae5b-49d6124396f7.png)</span>

Cek pods dan service
```sh
sudo kubectl -n security get pods
sudo kubectl -n security get svc
```
<span style="display:block;text-align:center">![image](https://user-images.githubusercontent.com/61746302/140011036-b3f354fb-8bb6-4acf-95c0-f68b8683a727.png)</span>

Akses IP:Port <br>
<span style="display:block;text-align:center">![image](https://user-images.githubusercontent.com/61746302/140011059-d50b618f-dba6-4b79-ab3f-ae9df2bbcecc.png)</span>

