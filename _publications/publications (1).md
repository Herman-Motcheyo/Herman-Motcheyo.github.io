---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
.pub-note {
  font-size: 14px;
  color: #828282;
  font-style: italic;
  margin-bottom: 1.5rem;
}
.pub-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}
.pub-item {
  display: flex;
  gap: 1.4rem;
  padding: 1.4rem 0 1.4rem 1rem;
  border-bottom: 1px solid #e8e8e8;
  border-left: 3px solid #c8a951;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}
.pub-item:last-child { border-bottom: none; }
.pub-thumb-wrap {
  flex-shrink: 0;
  width: 140px;
  position: relative;
}
.pub-thumb-wrap img.thumb-main {
  width: 140px;
  height: 100px;
  object-fit: cover;
  border: 1px solid #ddd;
  display: block;
  cursor: zoom-in;
}
.pub-thumb-wrap img.thumb-zoom {
  display: none;
  position: absolute;
  top: 0;
  left: 150px;
  width: 340px;
  height: auto;
  border: 1px solid #bbb;
  box-shadow: 0 6px 24px rgba(0,0,0,0.18);
  z-index: 999;
  pointer-events: none;
  background: white;
}
.pub-thumb-wrap:hover img.thumb-zoom { display: block; }
.pub-content { flex: 1; min-width: 0; }
.pub-title {
  font-size: 15.5px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 5px;
  line-height: 1.4;
}
.pub-authors {
  font-size: 13.5px;
  color: #444;
  margin: 0 0 3px;
  line-height: 1.5;
}
.pub-authors strong { font-weight: 700; color: #1a1a1a; }
.pub-venue {
  font-size: 13.5px;
  color: #444;
  margin: 0 0 10px;
  line-height: 1.5;
}
.pub-venue .under-review { font-weight: 700; font-style: italic; }
.pub-links {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}
.pub-btn {
  font-size: 12.5px;
  padding: 4px 12px;
  border-radius: 3px;
  border: 1px solid #aaa;
  background: #fff;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  line-height: 1.5;
  font-family: inherit;
  transition: background 0.15s;
}
.pub-btn:hover { background: #f0f0f0; text-decoration: none; color: #111; }
.pub-btn.active { background: #e8e8e8; border-color: #888; }
.pub-collapsible {
  display: none;
  width: 100%;
  margin-top: 10px;
  padding: 10px 14px;
  background: #f8f8f8;
  border-left: 3px solid #ccc;
  font-size: 13px;
  color: #444;
  line-height: 1.7;
  box-sizing: border-box;
}
.pub-collapsible.open { display: block; }
.pub-collapsible pre {
  background: #f0f0f0;
  padding: 10px;
  font-size: 12px;
  overflow-x: auto;
  white-space: pre;
  margin: 0;
}
.pub-cv-link {
  font-size: 14px;
  font-style: italic;
  margin-top: 1.5rem;
  color: #333;
}
.pub-cv-link a { color: #8b1a1a; font-weight: 600; text-decoration: none; }
.pub-cv-link a:hover { text-decoration: underline; }
@media (max-width: 580px) {
  .pub-item { flex-direction: column; border-left: none; border-top: 3px solid #c8a951; padding-left: 0; }
  .pub-thumb-wrap { width: 100%; }
  .pub-thumb-wrap img.thumb-main { width: 100%; height: 160px; }
  .pub-thumb-wrap img.thumb-zoom { display: none !important; }
}
</style>

<ul class="pub-list">
<li class="pub-item">
    <div class="pub-thumb-wrap">
      <img class="thumb-main" src="/images/cap2026.png" alt="ISMIS 2026">
      <img class="thumb-zoom"  src="/images/cap2026.png" alt="">
    </div>
    <div class="pub-content">
      <p class="pub-title">Online domain adaptation for data stream anomaly detection</p>
      <p class="pub-authors"><strong>Herman Tcheneghon Motcheyo</strong>, Issam Falih,  Engelbert Mephu Nguifo</p>
      <p class="pub-venue">
        <span class="under-review">Accepted</span> CAp (Conférence sur l'Apprentissage automatique) and RFIAP (Reconnaissance des Formes, Image, Apprentissage et Perception)  (<strong>CAP & RFIAP 2026</strong>) 2026
      </p>
      <div class="pub-links">
        <button class="pub-btn" onclick="toggleBlock(this, 'abs-cap2026')">Abstract</button>
        <a class="pub-btn" href="#" target="_blank">Paper (Available Soon)</a>
      </div>
      <div class="pub-collapsible" id="abs-cap2026">
        Anomaly detection in streaming data aims to identify abnormal patterns within continuous and potentially unbounded data flows. Despite significant progress in recent years, key challenges remain in balancing computational efficiency with detection accuracy, particularly in dynamic environments subject to concept drift. In this paper, we propose OnMROT, a novel online anomaly detection framework based on optimal transport theory. This approach dynamically adapts to evolving distributions by triggering model retraining exclusively upon the detection of concept drift. We evaluate OnMROT on 19 real-world and synthetic datasets. Experimental results demonstrate that our approach achieves state-of-the-art performance in terms of execution time, while maintaining competitive detection accuracy. These results highlight the effectiveness of leveraging optimal transport in streaming settings and the benefit of selective retraining strategies for scalable anomaly detection.
      </div>
    </div>
  </li>
  <!-- 1. ISMIS 2026 -->
  <li class="pub-item">
    <div class="pub-thumb-wrap">
      <img class="thumb-main" src="/images/pca.png" alt="ISMIS 2026">
      <img class="thumb-zoom"  src="/images/pca.png" alt="">
    </div>
    <div class="pub-content">
      <p class="pub-title">Accelerating Frequent Gradual Pattern Discovery through Dimensionality Reduction</p>
      <p class="pub-authors"><strong>Herman Tcheneghon Motcheyo</strong>, Issam Falih, Lauraine Tiogning-Djiogue, Engelbert Mephu Nguifo</p>
      <p class="pub-venue">
        <span class="under-review">Accepted</span> at 28th International Symposium on Methodologies for Intelligent Systems (<strong>ISMIS</strong>), 2026
      </p>
      <div class="pub-links">
        <button class="pub-btn" onclick="toggleBlock(this, 'abs-ismis2026')">Abstract</button>
        <a class="pub-btn" href="#" target="_blank">Paper (Available Soon)</a>
      </div>
      <div class="pub-collapsible" id="abs-ismis2026">
        With the rapid advancement of modern technologies, exponential data growth has become an unavoidable reality, which presents
major obstacles to knowledge extraction. Gradual patterns enable the discovery of meaningful relationships within such data, expressed in the
form “more/less X, more/less Y,” where X and Y denote data attributes.
These patterns play a crucial role in supporting data-driven decision-making processes. Although several approaches for gradual pattern dis-
covery have been proposed in the literature, the computational cost, particularly in terms of execution time and memory consumption, remains
a major challenge, even with the availability of parallel solutions. In this paper, we propose the use of Principal Component Analysis (PCA) as a
preprocessing technique to accelerate gradual pattern discovery by reducing data dimensionality. The proposed approach is evaluated on multi-
ple datasets from diverse application domains and compared against the GRAANK and GRAANK-based metaheuristic algorithms (PSO, GA,
PRS). Experimental results demonstrate a substantial reduction in both execution time and memory usage.
      </div>
    </div>
  </li>
   

  <!-- 3. CRI 2025 -->
  <li class="pub-item">
    <div class="pub-thumb-wrap">
      <img class="thumb-main" src="/images/cri2025.png" alt="CRI 2025">
      <img class="thumb-zoom"  src="/images/cri2025.png" alt="">
    </div>
    <div class="pub-content">
      <p class="pub-title">Still Malignant if You Were a Woman? Auditing Group and Counterfactual Fairness in Dermatological AI</p>
      <p class="pub-authors"><strong>Herman Tcheneghon Motcheyo</strong>,  Lauraine Tiogning-Djiogue</p>
      <p class="pub-venue">Conférence de Recherche en Informatique (<strong>CRI</strong>), 2025</p>
      <div class="pub-links">
        <button class="pub-btn" onclick="toggleBlock(this, 'abs-cri2025')">Abstract</button>
        <a class="pub-btn" href="https://hal.science/hal-05425093/" target="_blank">Paper</a>
      </div>
      <div class="pub-collapsible" id="abs-cri2025">
        Deep learning models achieve remarkable performance in skin lesion classification, but concerns remain regarding whether such systems behave consistently across demographic groups or under counterfactual changes to sensitive attributes. In this paper, we present a fairness audit of a multimodal skin lesion classifier that integrates dermoscopic images with patient metadata. Our contributions are threefold:(1) We design a multimodal CNN that fuses image features with structured patient metadata, enabling controlled testing of demographic sensitivity. (2) We assess group fairness by comparing performance metrics across sex groups.(3) We assess counterfactual fairness by evaluating whether model predictions remain consistent when sensitive attributes are altered while keeping the image input fixed. Experiments on the HAM10000 dataset show that the multimodal EfficientNet achieves 85.78\% accuracy, an 86\% F1-score, and an MCC of 0.78. Although slight performance differences are observed between sex groups, statistical tests indicate that these disparities are insignificant, suggesting no systematic group-level unfairness under our metrics. However, counterfactual analyses reveal isolated prediction changes when the sex attribute is perturbed, indicating that fairness vulnerabilities may still arise despite non-significant group differences. These results highlight the importance of integrating both group and counterfactual fairness evaluations into the development of medical AI systems.
      </div>
    </div>
  </li>

  <!-- 4. Open Ceramics 2025 -->
  <li class="pub-item">
    <div class="pub-thumb-wrap">
      <img class="thumb-main" src="/images/T-mofs-rga.jpg" alt="Open Ceramics 2025">
      <img class="thumb-zoom"  src="/images/T-mofs-rga.jpg" alt="">
    </div>
    <div class="pub-content">
      <p class="pub-title">Machine Learning for the Optimization of Porosity-Hygroscopy Correlations of Porous Geopolymers in Indoor Thermal Comfort: A Hybrid Feature Selection Approach</p>
      <p class="pub-authors">L. Tiogning-Djiogue, <strong>H. Tcheneghon Motcheyo</strong>, Elie Kamseu, Sylvie Rossignol and Cristina Leonelli e</p>
      <p class="pub-venue"><em><strong>Open Ceramics</strong> (Q1/Q2, Elsevier)</em>, 2025</p>
      <div class="pub-links">
        <button class="pub-btn" onclick="toggleBlock(this, 'abs-ceramics2025')">Abstract</button>
        <a class="pub-btn" href="https://doi.org/10.1016/j.oceram.2025.100857" target="_blank">Paper</a>
      </div>
      <div class="pub-collapsible" id="abs-ceramics2025">
        Geopolymers are recognized as sustainable and environmentally friendly materials with a notable hygroscopic capacity that provides several advantages, particularly concerning thermal comfort. Optimizing the selection of variables with the most significant impact is essential for enhanced performance. However, conducting experimental tests to establish porosity hygroscopy correlations is costly regarding labor, time, and material resources. This study aims to employ a hybrid feature selection technique based on a multi-objective algorithm incorporating RReliefF and NSGA-II to streamline the geopolymer matrices by automatically selecting the most impactful and significant variables for their hygroscopic properties. Upon evaluating this feature selection method with laboratory-collected data, the Root Mean Squared Error (RMSE), Mean Squared Error (MSE), and Mean Absolute Error (MAE) results are significantly superior to those of other existing methods. These results underscore the importance of intrinsic parameters such as porosity, tortuosity, and pore diameter, along with external parameters like temperature and humidity, which directly affect hygroscopy. Consequently, this approach is expected to reduce experimental efforts and expedite the development of new geopolymer materials.
      </div>
    </div>
  </li>

</ul>

<p class="pub-cv-link">
  Find all my projects in <a href="https://www.hermantcheneghon.tech/projects">Projects</a>!
</p>

<script>
function toggleBlock(btn, id) {
  var block = document.getElementById(id);
  if (!block) return;
  var isOpen = block.classList.contains('open');
  block.classList.toggle('open', !isOpen);
  btn.classList.toggle('active', !isOpen);
}
</script>
