---
date: 2021-11-02
title: 'Deploy Ceph di Kubernetes Cluster'
template: post
thumbnail: '../thumbnails/Kubernetes-Logo.wine.png'
slug: Deploy-Ceph-di-Kubernetes-Cluster
categories:
  - kubernetes
tags:
  - kubernetes
---
Kali ini saya akan membagikan sebuah tutorial cara instalasi ceph di Kubernetes Cluster. <br>
Prasyarat :
- Kubernetes Cluster dengan worker minimal 3
- Disetiap worker disediakan disk khusus untuk ceph
Pengaturan Lab saya berisi 4 server, yang dimana 1 node sebagai kontrol/master dan 3 node yang akan digunakan untuk menjalankan beban kerja kontainer dan storage ceph.

<span style="display:block;text-align:center">![image](https://user-images.githubusercontent.com/61746302/140010122-086eeaae-7849-4354-8bee-8861b16ffb08.png)</span>

Disetiap Node Worker disediakan disk khusus untuk ceph yang belum di format, untuk contoh disini saya menyediakan 15GB pada disk xvdb <br>
<span style="display:block;text-align:center">![image](https://user-images.githubusercontent.com/61746302/140010156-0f810c96-57b0-4a64-a9ad-ef8912f9f552.png)</span> <br>

1. Pertama Install Kubernetes Cluster dengan mengikuti tutorial yang sudah saya buat [Cara Install Kubernetes Cluster](https://rozaqi.medium.com/cara-install-kubernetes-cluster-9884df223db) <br>
<span style="display:block;text-align:center">![image](https://user-images.githubusercontent.com/61746302/140010198-fa374905-d3c5-49b9-a5a5-e4364a7fe43c.png)</span>

2. Clone repositori rook-ceph
```sh
git clone --single-branch --branch v1.5.9 https://github.com/rook/rook.git
```

3. Masuk ke direktori rook-ceph dan jalankan perintah berikut.
```sh
cd rook/cluster/examples/kubernetes/ceph
kubectl create -f crds.yaml -f common.yaml -f operator.yaml
```

Tunggu dan verifikasi bahwa operator ceph-rook sudah berjalan pada kubernetes
```sh
kubectl get pod -n rook-ceph
```
<span style="display:block;text-align:center">![image](https://user-images.githubusercontent.com/61746302/140010304-acc07336-2b28-469c-bd33-50a353b82247.png)</span>

4. Mulai membangun ceph cluster
```sh
kubectl create -f cluster.yaml
```
Membutuhkan waktu yang lama bagi Pod dalam namespace rook-ceph untuk dijalankan, tunggu dan verifikasi pod
```sh
watch kubectl get pod -n rook-ceph
```

Verifikasi ceph cluster
```sh
kubectl get cephcluster -A
```
<span style="display:block;text-align:center">![image](https://user-images.githubusercontent.com/61746302/140010671-5849e78d-7bba-4f46-9331-7fc2712f067e.png)</span>

5. install toolbox ceph agar bisa kita cek status ceph, dan kebutuhan lainnya
```sh
kubectl create -f toolbox.yaml
```

6. install toolbox ceph agar bisa kita cek status ceph, dan kebutuhan lainnya
```sh
kubectl create -f toolbox.yaml
```

7. Setelah pods rook-ceph-tools berjalan, kemudian jalankan toolbox secara interaktif dan cek status ceph nya
```sh
kubectl -n rook-ceph exec -it $(kubectl -n rook-ceph get pod -l "app=rook-ceph-tools" -o jsonpath='{.items[0].metadata.name}') bash
ceph status
```
<span style="display:block;text-align:center">![image](https://user-images.githubusercontent.com/61746302/140010412-e8418e4c-ad9f-4fcb-bc5b-8b752824f9c6.png)</span>
