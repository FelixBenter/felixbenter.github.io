<template>
  <q-page>
    <div class="q-mt-none q-mb-lg text-primary">
      <div class="text-h4">Blender DCX Importer</div>
      <br />
      <q-img
        src="portfolio/dcximporter_gif_0.gif"
        :class="$q.platform.is.mobile ? '' : 'aside'"
      />
      <p>
        An add-on for the 3D modelling program Blender to import proprietary
        model and texture files from FromSoftware video games. The tool unpacks
        the input files and loads mesh data, armature data and finds the
        appropriate texture data for that model. It then loads these items into
        Blender and applies the armature and texture data into a rigged and
        textured blender model.
      </p>

      <p>
        Blender supports an extensive python API for automating any user
        function in the program. The add-on, using several other tools,
        decompresses the proprietary .dcx files.
      </p>
      <q-img
        src="portfolio/dcximporter_img_1.png"
        :class="$q.platform.is.mobile ? '' : 'aside'"
      />
      <p>
        From this .dcx file we get a .flver (model, UV and rigging data) and a
        .tpf file (texture data). The .flver model data is read into memory and
        the model is created in blender from the vertex buffer and armature
        data. The .tpf is unpacked and the textures within are converted from
        .dds to .png using the DirectXTex texture converter.
      </p>

      <p>
        Finally, Blender materials are created from these textures and applied
        to the model.
      </p>

      <q-markdown
        style="
          line-height: 1.5;
          overflow: auto;
          overflow-x: auto;
          min-width: 0px;
          box-sizing: border-box;
        "
        :src="markdown"
        class="focused"
      />
      <div class="text-caption">
        Excerpt from the armature creation code: Creates, positions and links
        bones for the model's armature from the flver data.
      </div>
    </div>
  </q-page>
</template>

<style src="@quasar/quasar-ui-qmarkdown/dist/index.css"></style>
<script>
import { defineComponent, ref } from "vue";
import { QMarkdown } from "@quasar/quasar-ui-qmarkdown";
export default defineComponent({
  name: "PhysarumPage",
  components: {
    QMarkdown,
  },
  data() {
    return {
      split: 60,
      markdown: `\`\`\`
def transform_bone_and_siblings(bone_index, parent_matrix):
  while bone_index != -1:
      flver_bone = flver_data.bones[bone_index]
      bone = armature.data.edit_bones[bone_index]
      if flver_bone.parent_index >= 0:
          bone.parent = armature.data.edit_bones[flver_bone.parent_index]

      translation_vector = Vector(
          (flver_bone.translation[0], flver_bone.translation[1],
            flver_bone.translation[2]))
      rotation_matrix = (
          Matrix.Rotation(flver_bone.rotation[1], 4, 'Y')
          @ Matrix.Rotation(flver_bone.rotation[2], 4, 'Z')
          @ Matrix.Rotation(flver_bone.rotation[0], 4, 'X'))

      head = parent_matrix @ translation_vector
      tail = head + rotation_matrix @ Vector((0, 0.05, 0))

      bone.head = (head[0], head[2], head[1])
      bone.tail = (tail[0], tail[2], tail[1])

      # Transform children and advance to next sibling
      transform_bone_and_siblings(
          flver_bone.child_index, parent_matrix
          @ Matrix.Translation(translation_vector) @ rotation_matrix)
      bone_index = flver_bone.next_sibling_index

transform_bone_and_siblings(0, Matrix())
\`\`\``,
    };
  },
});
</script>

<style lang="scss">
.aside {
  width: calc(max(40%, 20px));
  padding-left: 1rem;
  margin-left: 1rem;
  float: right;
}
.focused {
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 5px;
  padding-right: 5px;
  color: $accent;
}
.q-markdown pre {
  position: absolute;
  left: 24px;
  right: 24px;
  background: white;
}
.q-markdown--line-numbers-wrapper {
  background: white;
  color: $primary;
}
</style>
