import numpy as np
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.metrics import accuracy_score, confusion_matrix

# Load the Iris dataset
iris = load_iris()
X = iris.data
y = iris.target

# Standardize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Apply PCA for visualization
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

# Apply K-Means with 3 clusters
kmeans = KMeans(n_clusters=3, random_state=42)
kmeans.fit(X_scaled)

# Predict the cluster for each data point
clusters = kmeans.predict(X_scaled)

# Visualize the clusters
plt.figure(figsize=(8, 6))
plt.scatter(X_pca[:, 0], X_pca[:, 1], c=clusters, cmap='viridis', marker='o', label='Clusters')
plt.scatter(pca.inverse_transform(kmeans.cluster_centers_[:, :2]), pca.inverse_transform(kmeans.cluster_centers_[:, :2]), 
            s=300, c='red', marker='x', label='Centroids')  # Centroids
plt.title('K-Means Clustering of Iris Dataset')
plt.xlabel('PCA Component 1')
plt.ylabel('PCA Component 2')
plt.legend()
plt.show()

# Evaluate the model
labels = np.choose(kmeans.labels_, [0, 1, 2]).astype(np.int64)
accuracy = accuracy_score(y, labels)
print(f'Accuracy: {accuracy * 100:.2f}%')
conf_matrix = confusion_matrix(y, labels)
print('Confusion Matrix:')
print(conf_matrix)
