<template>
  <AuSection>
    <AuContainer>
      <AuGrid class="uk-child-width-1-2@m">
        <div>
          <h2>Overflow Auto</h2>

          <div class="uk-overflow-auto">
            <table
              class="uk-table uk-table-striped uk-table-small uk-text-nowrap"
            >
              <thead>
                <tr>
                  <th>Table Heading</th>
                  <th>Table Heading</th>
                  <th>Table Heading</th>
                  <th>Table Heading</th>
                  <th>Table Heading</th>
                  <th>Table Heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                </tr>
                <tr>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                </tr>
                <tr>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                  <td>Table Data</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Table Footer</td>
                  <td>Table Footer</td>
                  <td>Table Footer</td>
                  <td>Table Footer</td>
                  <td>Table Footer</td>
                  <td>Table Footer</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div>
          <h2>Pre scrollable</h2>

          <pre
            class="uk-overflow-auto uk-height-medium uk-resize"
          ><code>&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;&lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;&lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
&lt;/div&gt;

&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
&lt;/div&gt;

&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
&lt;/div&gt;

&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
&lt;/div&gt;

&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
&lt;/div&gt;

&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
&lt;/div&gt;

&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
&lt;/div&gt;

&lt;div uk-grid&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
    &lt;div class="uk-width-1-2"&gt;…&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </AuGrid>

      <h2>Overflow Auto JS</h2>

      <div class="uk-child-width-1-2@m" uk-grid>
        <div>
          <div class="uk-height-medium">
            <div class="js-wrapper">
              <p>Some content before the overflow auto container.</p>

              <div
                uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper"
              >
                <div class="uk-grid-small" uk-grid>
                  <div class="uk-width-1-2">
                    <img
                      src="/images/pexels-sonny-vermeer-17445970.jpg"
                      width="1800"
                      height="1200"
                      alt=""
                    />
                  </div>
                  <div class="uk-width-1-2">
                    <img
                      src="/images/pexels-nada-ghannam-11233594.jpg"
                      width="1800"
                      height="1200"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <p>Some content after the overflow auto container.</p>
            </div>
          </div>
        </div>
        <div>
          <div class="uk-height-medium">
            <div class="js-wrapper">
              <p>Some content before the overflow auto container.</p>

              <div
                uk-overflow-auto="selContainer: .uk-height-medium; selContent: .js-wrapper"
              >
                <div class="uk-grid-small" uk-grid>
                  <div class="uk-width-1-2">
                    <img
                      src="/images/pexels-sonny-vermeer-17445970.jpg"
                      width="1800"
                      height="1200"
                      alt=""
                    />
                  </div>
                  <div class="uk-width-1-2">
                    <img
                      src="/images/pexels-nada-ghannam-11233594.jpg"
                      width="1800"
                      height="1200"
                      alt=""
                    />
                  </div>
                  <div class="uk-width-1-2">
                    <img
                      src="/images/pexels-mark-gorman-623843.jpg"
                      width="1800"
                      height="1200"
                      alt=""
                    />
                  </div>
                  <div class="uk-width-1-2">
                    <img
                      src="/images/pexels-sonny-vermeer-17445970.jpg"
                      width="1800"
                      height="1200"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <p>Some content after the overflow auto container.</p>
            </div>
          </div>
        </div>
      </div>

      <h3>JavaScript Options</h3>

      <table class="uk-table uk-table-striped">
        <thead>
          <tr>
            <th>Option</th>
            <th>Value</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>selContainer</code></td>
            <td>CSS selector</td>
            <td><code>.uk-modal</code></td>
            <td>The container element which provides the height.</td>
          </tr>
          <tr>
            <td><code>selContent</code></td>
            <td>CSS selector</td>
            <td><code>.uk-modal-dialog</code></td>
            <td>
              The element which wraps the inner content to provide its height.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Responsive Objects</h2>

      <div class="uk-child-width-1-3@s" uk-grid>
        <div>
          <p>JS Responsive Width (Iframe)</p>
          <div style="padding: 42.5% 0 0 0; position: relative">
            <iframe
              src="https://player.vimeo.com/video/55073825?h=5da33f7124"
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              uk-responsive
            ></iframe>
          </div>
          <p>
            <a href="https://vimeo.com/55073825">OVERVIEW</a> from
            <a href="https://vimeo.com/planetarycollective"
              >Planetary Collective</a
            >
            on <a href="https://vimeo.com">Vimeo</a>.
          </p>
        </div>
        <div>
          <p>Responsive Height (Image)</p>
          <p style="height: 100px">
            <img
              class="uk-responsive-height"
              src="/images/pexels-mark-gorman-623843.jpg"
              width="1800"
              height="1200"
              alt=""
            />
          </p>
        </div>
      </div>

      <h2>Object Fit and Position</h2>

      <div class="uk-child-width-1-3@s" uk-grid>
        <div>
          <p>Object Fit Cover</p>
          <img
            class="uk-object-cover"
            src="/images/pexels-mark-gorman-623843.jpg"
            width="1000"
            height="1000"
            alt=""
            style="aspect-ratio: 1 / 1"
          />
        </div>
        <div>
          <p>Object Fit Contain</p>
          <img
            class="uk-object-contain"
            src="/images/pexels-mark-gorman-623843.jpg"
            width="1000"
            height="1000"
            alt=""
            style="aspect-ratio: 1 / 1"
          />
        </div>
        <div>
          <p>Object Fit Cover Left</p>
          <img
            class="uk-object-cover uk-object-top-left"
            src="/images/pexels-mark-gorman-623843.jpg"
            width="1000"
            height="1000"
            alt=""
            style="aspect-ratio: 1 / 1"
          />
        </div>
      </div>

      <h2>Box-shadows</h2>

      <div class="uk-child-width-1-5@m uk-grid-large" uk-grid>
        <div>
          <div class="uk-inline uk-box-shadow-hover-small">
            <img
              class="uk-invisible"
              src="/images/pexels-mark-gorman-623843.jpg"
              width="1800"
              height="1200"
              alt=""
            />
            <div class="uk-position-center">Hover</div>
          </div>
        </div>
        <div>
          <div class="uk-inline uk-box-shadow-small">
            <img
              class="uk-invisible"
              src="/images/pexels-mark-gorman-623843.jpg"
              width="1800"
              height="1200"
              alt=""
            />
            <div class="uk-position-center">Small</div>
          </div>
        </div>
        <div>
          <div class="uk-inline uk-box-shadow-medium">
            <img
              class="uk-invisible"
              src="/images/pexels-mark-gorman-623843.jpg"
              width="1800"
              height="1200"
              alt=""
            />
            <div class="uk-position-center">Medium</div>
          </div>
        </div>
        <div>
          <div class="uk-inline uk-box-shadow-large">
            <img
              class="uk-invisible"
              src="/images/pexels-mark-gorman-623843.jpg"
              width="1800"
              height="1200"
              alt=""
            />
            <div class="uk-position-center">Large</div>
          </div>
        </div>
        <div>
          <div class="uk-inline uk-box-shadow-xlarge">
            <img
              class="uk-invisible"
              src="/images/pexels-mark-gorman-623843.jpg"
              width="1800"
              height="1200"
              alt=""
            />
            <div class="uk-position-center">X-Large</div>
          </div>
        </div>
        <div>
          <img
            class="uk-box-shadow-hover-xlarge"
            src="/images/pexels-mark-gorman-623843.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-small"
            src="/images/pexels-mark-gorman-623843.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-medium"
            src="/images/pexels-mark-gorman-623843.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-large"
            src="/images/pexels-mark-gorman-623843.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-xlarge"
            src="/images/pexels-mark-gorman-623843.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-hover-xlarge"
            src="/images/pexels-sonny-vermeer-17445970.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-small"
            src="/images/pexels-sonny-vermeer-17445970.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-medium"
            src="/images/pexels-sonny-vermeer-17445970.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-large"
            src="/images/pexels-sonny-vermeer-17445970.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-xlarge"
            src="/images/pexels-sonny-vermeer-17445970.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-hover-xlarge"
            src="/images/pexels-nada-ghannam-11233594.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-small"
            src="/images/pexels-nada-ghannam-11233594.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-medium"
            src="/images/pexels-nada-ghannam-11233594.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-large"
            src="/images/pexels-nada-ghannam-11233594.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
        <div>
          <img
            class="uk-box-shadow-xlarge"
            src="/images/pexels-nada-ghannam-11233594.jpg"
            width="1800"
            height="1200"
            alt=""
          />
        </div>
      </div>

      <h2>Box-shadow Bottom</h2>

      <div class="uk-child-width-1-5@m uk-grid-large" uk-grid>
        <div class="uk-width-1-6@m">
          <div class="uk-box-shadow-bottom">
            <img
              src="/images/pexels-mark-gorman-623843.jpg"
              width="1800"
              height="1200"
              alt=""
            />
          </div>
        </div>
        <div class="uk-width-1-3@m">
          <div class="uk-box-shadow-bottom">
            <img
              src="/images/pexels-mark-gorman-623843.jpg"
              width="1800"
              height="1200"
              alt=""
            />
          </div>
        </div>
        <div class="uk-width-1-2@m">
          <div class="uk-box-shadow-bottom">
            <img
              src="/images/pexels-mark-gorman-623843.jpg"
              width="1800"
              height="1200"
              alt=""
            />
          </div>
        </div>
      </div>

      <h2>Drop Cap</h2>

      <p class="uk-text-lead uk-dropcap">
        Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>

      <div class="uk-dropcap">
        <p>
          Torem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>

      <h1>Logo</h1>

      <p>
        <a class="uk-logo" href="#">Text Logo</a>
      </p>

      <div class="uk-flex-inline uk-margin uk-grid-small" uk-grid>
        <div>
          <p>Image</p>
          <a class="uk-logo" href="#" aria-label="Back to Home">
            <img
              src="/images/pexels-mark-gorman-623843.jpg"
              width="200"
              height="133"
              alt=""
            />
          </a>
        </div>
        <div>
          <p>+ Inverse Image</p>
          <a class="uk-logo" href="#" aria-label="Back to Home">
            <img
              src="/images/pexels-mark-gorman-623843.jpg"
              width="200"
              height="133"
              alt=""
            />
            <img
              class="uk-logo-inverse"
              src="/images/pexels-nada-ghannam-11233594.jpg"
              width="200"
              height="133"
              alt=""
            />
          </a>
        </div>
        <div>
          <p>Picture</p>
          <a class="uk-logo" href="#" aria-label="Back to Home">
            <picture>
              <img
                src="/images/pexels-mark-gorman-623843.jpg"
                width="200"
                height="133"
                alt=""
              />
            </picture>
          </a>
        </div>
        <div>
          <p>+ Inverse Picture</p>
          <a class="uk-logo" href="#" aria-label="Back to Home">
            <picture>
              <img
                src="/images/pexels-mark-gorman-623843.jpg"
                width="200"
                height="133"
                alt=""
              />
            </picture>
            <picture>
              <img
                class="uk-logo-inverse"
                src="/images/pexels-nada-ghannam-11233594.jpg"
                width="200"
                height="133"
                alt=""
              />
            </picture>
          </a>
        </div>
      </div>
    </AuContainer>
  </AuSection>
</template>
