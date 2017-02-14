<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>

        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name Fn</button>
    </div>
</template>

<script>
    export default {
        props:{
            name: {
                type: String,
                default: function () {
                    return {
                        name: 'Função'
                    }
                },
            },
            resetFn: {
                type: Function,
            },
            userAge: {
                type: Number,
            }
        },
        data: function () {
            return {

            }
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            },
            resetName: function () {
                this.name = "Allan";
                this.$emit('nameWasReset', this.name);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
